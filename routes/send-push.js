const express = require('express'),
    router = new express.Router(),
    axios = require('axios');

/** send push notification */
router.post("/send-push", (req, res) => {
    const request_body = req.body,
        data = {
            app_id: "4ebd8546-e5f5-4ca9-852d-35ebec4c71c7",
            headings: { en: request_body.headings },
            contents: { en: request_body.contents },
            include_player_ids: request_body.include_player_ids
        };
    const headers = {
        "Content-Type": "application/json; charset=utf-8"
    },
        options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };
    axios.post('https://onesignal.com/api/v1/notifications', data, {
        headers: options
    })
        .then((response) => {
            res.status(200).json({
                success: true,
            });
        })
        .catch((error) => {
            console.log("error :", error);
            res.status(error.code).json({
                success: false,
            });
        });
});
module.exports = router;