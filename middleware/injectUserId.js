const injectUserId = (req, res, next) => {
    if (req.user && req.user._id) {
        req.params.userId = req.user._id;
        next();
    } else {
        res.status(401).json({ err: "User ID missing from token" });
    }
};

export default injectUserId;
