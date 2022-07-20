// triggers on a new video
const perform = async (z, bundle) => {
  const response = await z.request({
    url: "https://www.giantbomb.com/api/videos/",
    params: {
      limit: 5,
      sort: "publish_date:desc",
    },
  });
  // this should return an array of objects
  return response.data.results;
};

module.exports = {
  // see here for a full list of available properties:
  // https://github.com/zapier/zapier-platform/blob/master/packages/schema/docs/build/schema.md#triggerschema
  key: "new_video",
  noun: "New Video",

  display: {
    label: "New Video",
    description: "Triggers when a new video is found.",
  },

  operation: {
    perform,

    // `inputFields` defines the fields a user could provide
    // Zapier will pass them in as `bundle.inputData` later. They're optional.
    inputFields: [],

    // In cases where Zapier needs to show an example record to the user, but we are unable to get a live example
    // from the API, Zapier will fallback to this hard-coded sample. It should reflect the data structure of
    // returned records, and have obvious placeholder values that we can show to any user.
    sample: {
      api_detail_url: "https://www.giantbomb.com/api/video/2300-17900/",
      associations: [],
      deck: "Today on Albummer! the gang is joined by Stereogum senior editor Tom Breihan to talk about Transplants self titled debut. If you liked Rancid, Operation Ivy, Blink-182, or commercials for shampoo in the year 2002 you're going to love this episode!",
      embed_player: "https://www.giantbomb.com/videos/embed/17900/",
      guid: "2300-17900",
      id: 17900,
      length_seconds: 4548,
      name: 'ALBUMMER! 47: Transplants "Self-Titled"',
      premium: false,
      publish_date: "2022-07-20 12:00:00",
      site_detail_url:
        "https://www.giantbomb.com/videos/albummer-47-transplants-self-titled/2300-17900/",
      image: {
        icon_url:
          "https://www.giantbomb.com/a/uploads/square_avatar/36/366200/3391982-thumbnail_ep47transplants.jpg",
        medium_url:
          "https://www.giantbomb.com/a/uploads/scale_medium/36/366200/3391982-thumbnail_ep47transplants.jpg",
        screen_url:
          "https://www.giantbomb.com/a/uploads/screen_medium/36/366200/3391982-thumbnail_ep47transplants.jpg",
        screen_large_url:
          "https://www.giantbomb.com/a/uploads/screen_kubrick/36/366200/3391982-thumbnail_ep47transplants.jpg",
        small_url:
          "https://www.giantbomb.com/a/uploads/scale_small/36/366200/3391982-thumbnail_ep47transplants.jpg",
        super_url:
          "https://www.giantbomb.com/a/uploads/scale_large/36/366200/3391982-thumbnail_ep47transplants.jpg",
        thumb_url:
          "https://www.giantbomb.com/a/uploads/original/36/366200/3391982-thumbnail_ep47transplants.jpg",
        tiny_url:
          "https://www.giantbomb.com/a/uploads/original/36/366200/3391982-thumbnail_ep47transplants.jpg",
        original_url:
          "https://www.giantbomb.com/a/uploads/original/36/366200/3391982-thumbnail_ep47transplants.jpg",
        image_tags: "All Images",
      },
      user: "janman",
      hosts: null,
      crew: null,
      video_type: "Features",
      video_show: {
        api_detail_url: "https://www.giantbomb.com/api/video_show/2340-103/",
        id: 103,
        title: "ALBUMMER!",
        position: 0,
        site_detail_url: "https://www.giantbomb.com/shows/albummer/",
        image: {
          icon_url:
            "https://www.giantbomb.com/a/uploads/square_avatar/36/366200/3307498-untitled-1.jpg",
          medium_url:
            "https://www.giantbomb.com/a/uploads/scale_medium/36/366200/3307498-untitled-1.jpg",
          screen_url:
            "https://www.giantbomb.com/a/uploads/screen_medium/36/366200/3307498-untitled-1.jpg",
          screen_large_url:
            "https://www.giantbomb.com/a/uploads/screen_kubrick/36/366200/3307498-untitled-1.jpg",
          small_url:
            "https://www.giantbomb.com/a/uploads/scale_small/36/366200/3307498-untitled-1.jpg",
          super_url:
            "https://www.giantbomb.com/a/uploads/scale_large/36/366200/3307498-untitled-1.jpg",
          thumb_url:
            "https://www.giantbomb.com/a/uploads/scale_avatar/36/366200/3307498-untitled-1.jpg",
          tiny_url:
            "https://www.giantbomb.com/a/uploads/square_mini/36/366200/3307498-untitled-1.jpg",
          original_url:
            "https://www.giantbomb.com/a/uploads/original/36/366200/3307498-untitled-1.jpg",
          image_tags: "All Images",
        },
        logo: {
          icon_url:
            "https://www.giantbomb.com/a/uploads/square_avatar/36/366200/3307496-albummerlogocopy.png",
          medium_url:
            "https://www.giantbomb.com/a/uploads/scale_medium/36/366200/3307496-albummerlogocopy.png",
          screen_url:
            "https://www.giantbomb.com/a/uploads/screen_medium/36/366200/3307496-albummerlogocopy.png",
          screen_large_url:
            "https://www.giantbomb.com/a/uploads/screen_kubrick/36/366200/3307496-albummerlogocopy.png",
          small_url:
            "https://www.giantbomb.com/a/uploads/scale_small/36/366200/3307496-albummerlogocopy.png",
          super_url:
            "https://www.giantbomb.com/a/uploads/scale_large/36/366200/3307496-albummerlogocopy.png",
          thumb_url:
            "https://www.giantbomb.com/a/uploads/scale_avatar/36/366200/3307496-albummerlogocopy.png",
          tiny_url:
            "https://www.giantbomb.com/a/uploads/square_mini/36/366200/3307496-albummerlogocopy.png",
          original_url:
            "https://www.giantbomb.com/a/uploads/original/36/366200/3307496-albummerlogocopy.png",
        },
      },
      video_categories: [
        {
          api_detail_url:
            "https://www.giantbomb.com/api/video_category/2320-8/",
          id: 8,
          name: "Features",
          site_detail_url: "https://www.giantbomb.com/videos/features/",
        },
      ],
      saved_time: null,
      youtube_id: null,
      low_url:
        "https://giantbomb.redvideo.io/2022/07/20/ccd49bc5-47bc-4b9e-85da-c879fdbd87f5/047Albummertransplantsfinal_540h1800k.mp4",
      high_url:
        "https://giantbomb.redvideo.io/2022/07/20/ccd49bc5-47bc-4b9e-85da-c879fdbd87f5/047Albummertransplantsfinal_720h3200k.mp4",
      hd_url:
        "https://giantbomb.redvideo.io/2022/07/20/ccd49bc5-47bc-4b9e-85da-c879fdbd87f5/047Albummertransplantsfinal_1080h5000k.mp4",
      url: "047Albummertransplantsfinal.mp4",
    },

    // If fields are custom to each user (like spreadsheet columns), `outputFields` can create human labels
    // For a more complete example of using dynamic fields see
    // https://github.com/zapier/zapier-platform/tree/master/packages/cli#customdynamic-fields
    // Alternatively, a static field definition can be provided, to specify labels for the fields
    outputFields: [
      // these are placeholders to match the example `perform` above
      // {key: 'id', label: 'Person ID'},
      // {key: 'name', label: 'Person Name'}
    ],
  },
};
