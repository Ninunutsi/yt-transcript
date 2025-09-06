import { BsStars } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function AppReadme() {
  return (
    <div className="p-10 space-y-6 text-ghost_white rounded-2xl shadow-lg max-w mx-auto text-lg">
      <h1 className="text-3xl font-bold flex items-center gap-3">
        <IoDocumentTextOutline size={30} /> Video Transcript Explorer
      </h1>

      <p className="text-lg">
        Video Transcript Explorer is a React-based web application that allows
        users to watch YouTube videos with synchronized transcripts. The app
        provides powerful tools for navigation, searching, copying, and
        exporting transcripts.
      </p>

      <div className="space-y-4 ">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <BsStars size={24} /> Features
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Video Playback:</strong> Watch YouTube videos directly, and
            seek to any timestamp via the transcript.
          </li>
          <li>
            <strong>Synchronized Transcript:</strong> Current line highlights
            automatically; click any line to jump to that moment.
          </li>
          <li>
            <strong>Search:</strong> Find specific keywords, with highlights for
            easy identification.
          </li>
          <li>
            <strong>Copy & Export:</strong> Copy transcript to clipboard or
            download it as PDF with timestamps.
          </li>
          <li>
            <strong>Scroll Progress:</strong> Visual progress bar shows how far
            you’ve scrolled through the transcript.
          </li>
          <li>
            <strong>AI Summary:</strong> Concise AI-generated summary of the
            video.
          </li>
          <li>
            <strong>Interactive UI:</strong> Tailwind CSS styling, smooth
            animations with Framer Motion, and responsive layout.
          </li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">How to Use</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Open the app and wait for the YouTube video to load.</li>
          <li>Watch the video while following the transcript on the right.</li>
          <li>Use the search bar to find keywords in the transcript.</li>
          <li>
            Click on any transcript line to jump to that point in the video.
          </li>
          <li>Copy or download the transcript using the buttons above.</li>
          <li>
            Review the AI-generated summary to quickly understand the video
            content.
          </li>
        </ol>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Tech Stack</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>React (TypeScript)</li>
          <li>Tailwind CSS</li>
          <li>Framer Motion</li>
          <li>jsPDF</li>
          <li>YouTube IFrame API</li>
          <li>React Icons</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Installation</h2>
        <pre className="bg-[#141a3ec3] p-4 rounded-lg overflow-x-auto text-white">
          <code>
            git clone
            https://github.com/yourusername/video-transcript-explorer.git{"\n"}
            cd video-transcript-explorer{"\n"}
            npm install{"\n"}
            npm run dev
          </code>
        </pre>
      </div>
    </div>
  );
}
