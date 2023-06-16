let videos = [
  {
    title: "First video",
    rating: 5,
    comments: 56,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Second video",
    rating: 5,
    comments: 56,
    createdAt: "2 minutes ago",
    views: 1000,
    id: 2,
  },
  {
    title: "Third video",
    rating: 5,
    comments: 56,
    createdAt: "2 minutes ago",
    views: 1000,
    id: 3,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};

export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};

export const postEdit = (req, res) => {
  // const { id } = req.params;
  // const video = videos[id - 1];
  // return res.render("edit", { pageTitle: `Editing : ${video.title}`, video });
};

export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching : ${video.title}`, video });
};
