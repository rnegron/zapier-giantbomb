const { API_BASE_URL } = require("../constants");

const perform = async (z, bundle) => {
  const response = await z.request({
    url: `${API_BASE_URL}/videos/`,
    params: {
      limit: 5,
      sort: "publish_date:desc",
      field_list:
        "id,name,deck,embed_player,site_detail_url,api_detail_url,video_type,publish_date,premium,low_url,high_url,hd_url",
    },
  });
  // this should return an array of objects
  return response.data.results;
};

module.exports = {
  key: "new_video",
  noun: "New Video",

  display: {
    label: "New Video",
    description: "Triggers when a new video is found.",
  },

  operation: {
    perform,

    inputFields: [],

    sample: {
      api_detail_url: "https://www.giantbomb.com/api/video/2300-17900/",
      deck: "Today on Albummer! the gang is joined by Stereogum senior editor Tom Breihan to talk about Transplants self titled debut. If you liked Rancid, Operation Ivy, Blink-182, or commercials for shampoo in the year 2002 you're going to love this episode!",
      embed_player: "https://www.giantbomb.com/videos/embed/17900/",
      guid: "2300-17900",
      id: 17900,
      name: 'ALBUMMER! 47: Transplants "Self-Titled"',
      premium: false,
      publish_date: "2022-07-20 12:00:00",
      site_detail_url:
        "https://www.giantbomb.com/videos/albummer-47-transplants-self-titled/2300-17900/",
      video_type: "Features",
      low_url:
        "https://giantbomb.redvideo.io/2022/07/20/ccd49bc5-47bc-4b9e-85da-c879fdbd87f5/047Albummertransplantsfinal_540h1800k.mp4",
      high_url:
        "https://giantbomb.redvideo.io/2022/07/20/ccd49bc5-47bc-4b9e-85da-c879fdbd87f5/047Albummertransplantsfinal_720h3200k.mp4",
      hd_url:
        "https://giantbomb.redvideo.io/2022/07/20/ccd49bc5-47bc-4b9e-85da-c879fdbd87f5/047Albummertransplantsfinal_1080h5000k.mp4",
    },

    outputFields: [
      { key: "id", label: "ID", type: "integer" },
      { key: "name", label: "Name", type: "string" },
      { key: "deck", label: "Description", type: "string" },
      { key: "video_type", label: "Video Type", type: "string" },
      { key: "embed_player", label: "Embed Link", type: "string" },
      { key: "publish_date", label: "Date Published", type: "string" },
      { key: "premium", label: "Is Premium Video", type: "boolean" },
      { key: "site_detail_url", label: "Site Detail URL", type: "string" },
      { key: "api_detail_url", label: "API Detail URL", type: "string" },
      { key: "low_url", label: "Low Quality Video URL", type: "string" },
      { key: "high_url", label: "High Quality Video URL", type: "string" },
      { key: "hd_url", label: "HD Quality Video URL", type: "string" },
    ],
  },
};
