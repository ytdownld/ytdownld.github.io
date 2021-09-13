import { API } from "./constants";

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const normalizeVideoInfo = (data) => {
  const basicInfo = {
    title: data.videoDetails.title,
    duration: data.videoDetails.lengthSeconds,
    thumbnail: data.videoDetails.thumbnails[3].url,
  };

  const channelInfo = {
    name: data.videoDetails.author.name,
    url: data.videoDetails.author.channel_url,
  };

  const formats = data.formats
    .filter((format) => {
      if (
        format.container !== null &&
        format.container !== "webm" &&
        format.hasAudio === true
      ) {
        return true;
      }
      return false;
    })
    .map((format) => {
      const q = format.hasVideo
        ? format.qualityLabel
        : `${format.audioBitrate} kbps`;
      const f =
        format.container === "mp4" && !format.hasVideo
          ? "mp3"
          : format.container;
      return {
        url: format.url,
        quality: q,
        format: f,
        hasVideo: format.hasVideo,
        itag: format.itag,
      };
    });

  const audioFormats = formats.filter((format) => !format.hasVideo);
  const videoFormats = formats.filter((format) => format.hasVideo);

  videoFormats.sort((a, b) => {
    if (a.itag > b.itag) return -1;
    if (a.itag < b.itag) return 1;
    return 0;
  });

  return {
    ...basicInfo,
    channel: channelInfo,
    formats: [...videoFormats, ...audioFormats],
  };
};

export const autoDownloadExists = async (info, pref, print) => {
  if (!pref.autoDownload) return false;

  const exists = info.formats.find(
    (format) => format.itag === pref.formatType.itag
  );

  if (!exists) {
    print(
      "Can't able to start auto download. Reason - preferred format type not found for this video.",
      true
    );
    return false;
  }

  return true;
};

export const click_link = (url) => {
  const link = document.createElement("a");
  link.href = url;
  link.click();
};

export const get_download_url = (obj) => {
  return `${API}/download?${new URLSearchParams(obj).toString()}`;
};
