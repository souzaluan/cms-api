import multer from "multer";

const parser = multer({
  storage: multer.diskStorage({
    destination: (request, file, callback) => {
      callback(null, "public/upload");
    },
    filename: (request, file, callback) => {
      callback(null, Date.now().toString() + "_" + file.originalname);
    },
  }),
  fileFilter: (request, file, callback) => {
    const availableExtension = ["image/png", "image/jpg", "image/jpeg"];
    const isAccepted = availableExtension.find(
      (accepted) => accepted == file.mimetype
    );

    if (isAccepted) {
      return callback(null, true);
    }

    return callback(null, false);
  },
});

export { parser };
