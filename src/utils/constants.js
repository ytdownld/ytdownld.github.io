export const formats = [
  {
    itag: 137,
    format: "mp4",
    quality: "1080p",
    value: "1080pmp4",
    label: "Video 1080P",
  },
  {
    itag: 136,
    format: "mp4",
    quality: "720p",
    value: "720pmp4",
    label: "Video 720P",
  },
  {
    itag: 135,
    format: "mp4",
    quality: "480p",
    value: "480pmp4",
    label: "Video 480P",
  },
  {
    itag: 18,
    format: "mp4",
    quality: "360p",
    value: "360pmp4",
    label: "Video 360P",
  },
  {
    itag: 140,
    format: "mp3",
    quality: "0p",
    value: "128 kbpsmp4",
    label: "Audio 128kbps",
  },
];

export const API = "https://ytdl-api.herokuapp.com";
export const YTregex =
  /(http:|https:)?\/\/(www\.)?(youtube.com|youtu.be)\/(watch)?(\?v=)?(\S+)?/;
