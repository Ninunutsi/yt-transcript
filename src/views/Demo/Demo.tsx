import { useEffect, useRef, useState } from "react";
import { transcript } from "../../utils/transcript";
import jsPDF from "jspdf";
import { IoCopy, IoDocumentTextOutline } from "react-icons/io5";
import TextInput from "../../components/common/Input";
import { Button } from "../../components";
import { LuDownload } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    onYouTubeIframeAPIReady: any;
    YT: any;
  }
}

export default function VideoWithTranscript() {
  const [player, setPlayer] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [search, setSearch] = useState("");
  const transcriptRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [copied, setCopied] = useState(false);

  const filteredTranscript = transcript?.filter((line) =>
    line.text.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (window.YT) {
      const ytPlayer = new window.YT.Player("yt-player", {
        width: "100%",
        videoId: "FkQWpQd9Zdo",
        events: {
          onReady: () => setPlayer(ytPlayer),
        },
      });
    } else {
      if (!document.getElementById("youtube-iframe-api")) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        tag.id = "youtube-iframe-api";
        document.body.appendChild(tag);

        window.onYouTubeIframeAPIReady = () => {
          const ytPlayer = new window.YT.Player("yt-player", {
            width: "400px",
            height: "300px",
            videoId: "FkQWpQd9Zdo",
            events: {
              onReady: () => setPlayer(ytPlayer),
            },
          });
        };
      }
    }
  }, []);

  useEffect(() => {
    if (!player) return;
    const interval = setInterval(
      () => setCurrentTime(player.getCurrentTime()),
      500
    );
    return () => clearInterval(interval);
  }, [player]);

  useEffect(() => {
    if (!transcriptRef.current) return;

    const activeElement = transcriptRef.current.querySelector(
      "p[data-active='true']"
    ) as HTMLParagraphElement | null;

    if (activeElement) {
      const container = transcriptRef.current;
      const offsetTop = activeElement.offsetTop;
      const containerHeight = container.clientHeight;
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = scrollTop / scrollHeight;
      setScrollProgress(progress);

      if (
        offsetTop < scrollTop ||
        offsetTop > scrollTop + containerHeight - 30
      ) {
        container.scrollTo({
          top: offsetTop - containerHeight,
          behavior: "smooth",
        });
      }
    }
  }, [currentTime, filteredTranscript]);

  const jumpToTime = (time: number) => {
    if (player) {
      console.log("ha");
      player.seekTo(time, true);
    }
  };

  const copyTranscript = () => {
    const textToCopy = filteredTranscript
      .map((line) => `[${formatTime(line.start)}] ${line.text}`)
      .join("\n");
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    let y = 20;
    const pageHeight = doc.internal.pageSize.height;

    filteredTranscript.forEach((line) => {
      const text = `[${formatTime(line.start)}] ${line.text}`;
      const splitText = doc.splitTextToSize(text, 180);

      splitText.forEach((chunk: string) => {
        if (y > pageHeight - 20) {
          doc.addPage();
          y = 20;
        }
        doc.text(chunk, 10, y);
        y += 10;
      });
    });

    doc.save("transcript.pdf");
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const highlightText = (text: string) => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} className="bg-rose-500 font-bold">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="flex flex-wrap flex-col xl:flex-row items-start gap-5 p-5 xl:p-20 relative">
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-5 right-5 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-50"
          >
            Transcript copied!
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="w-full xl:w-[52%]"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="p-5 xl:p-10 rounded-2xl bg-bg_blue shadow">
          <div id="yt-player" className="aspect-video w-full"></div>
        </div>
      </motion.div>

      <motion.div
        className="w-full xl:w-[45%] p-5 lg:p-10 rounded-2xl bg-bg_blue shadow relative overflow-x-hidden"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gray-600 rounded-full overflow-hidden">
          <motion.div
            className="h-1 bg-blue-500 rounded-full"
            style={{ scaleX: scrollProgress }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: scrollProgress }}
          />
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <h3 className="flex gap-3 items-center text-md text-ghost_white">
            <IoDocumentTextOutline color="white" size={22} />
            Transcript
          </h3>
          <div className="flex gap-3.5 flex-wrap">
            <Button
              variant="copy"
              onClick={copyTranscript}
              className="cursor-pointer flex gap-2 items-center"
            >
              <IoCopy /> Copy
            </Button>
            <Button
              variant="pdf"
              onClick={downloadPDF}
              className="cursor-pointer flex gap-2 items-center"
            >
              <LuDownload /> PDF
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <TextInput
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            icon={<FiSearch color="white" size={19} />}
            className="h-12  text-sm"
          />
        </div>

        <div
          ref={transcriptRef}
          className="max-h-[300px] overflow-y-auto pr-2 mt-3"
        >
          {filteredTranscript?.map((line, index) => {
            const isActive =
              currentTime >= line.start && currentTime < line.end;
            console.log(isActive, "is active");
            return (
              <p
                key={index}
                data-active={isActive ? "true" : "false"}
                className={`border text-sm rounded-lg py-3 px-2 my-2.5 cursor-pointer ${
                  isActive
                    ? "font-bold bg-blue-950 text-blue-500 border-blue-500"
                    : "font-normal text-white border-blue-900"
                }`}
                onClick={() => jumpToTime(line.start)}
              >
                <span className="mr-4 sm:mr-8 text-gray-500 font-bold">
                  [{formatTime(line.start)}]
                </span>
                {highlightText(line.text)}
              </p>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className=" w-[100%]"
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="bg-bg_blue w-[100%] rounded-2xl mt-7 p-5 lg:block lg:p-10">
          <h3 className="flex gap-3 items-center text-xl xl:text-2xl text-ghost_white">
            <BsStars color="white" size={22} />
            AI Summary
          </h3>
          <p className="mt-3 bg-[#141a3ec3] rounded-2xl p-4 xl:p-5 text-ghost_white text-sm">
            The video takes viewers on a journey through the vast scales of the
            universe, exploring the tiniest particles to the largest cosmic
            structures. It explains complex scientific concepts in a simple and
            engaging way, showing how everything in the cosmos is
            interconnected. Through stunning visuals and insightful narration,
            viewers gain a deeper appreciation of the wonders of space and the
            incredible journey of discovery that science enables.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
