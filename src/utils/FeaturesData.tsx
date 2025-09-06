import type { ReactNode } from "react";
import {
  FiFileText,
  FiSearch,
  FiDownload,
  FiCopy,
  FiActivity,
} from "react-icons/fi";

export interface Feature {
  title: string;
  description: string;
  icon: ReactNode;
}

export const features: Feature[] = [
  {
    title: "Smart Transcription",
    description: "Get accurate transcripts with synchronized highlighting",
    icon: <FiFileText size={24} />,
  },
  {
    title: "Instant Search",
    description: "Find any phrase or keyword within seconds",
    icon: <FiSearch size={24} />,
  },
  {
    title: "PDF Export",
    description: "Download transcripts in professional PDF format",
    icon: <FiDownload size={24} />,
  },
  {
    title: "One-Click Copy",
    description: "Copy entire transcripts to your clipboard instantly",
    icon: <FiCopy size={24} />,
  },
  {
    title: "AI Summaries",
    description: "Generate concise summaries of video content",
    icon: <FiActivity size={24} />,
  },
];
