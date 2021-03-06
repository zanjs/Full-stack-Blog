import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "article_title": {
        "marginLeft": 5,
        "fontSize": 24,
        "marginTop": 0
    },
    "article_foot a": {
        "color": "#999",
        "textDecoration": "none",
        "fontSize": 14,
        "marginRight": 3
    },
    "article_foot a:hover": {
        "textDecoration": "none"
    },
    "article_foot a:visited": {
        "color": "#999"
    },
    "article_container": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "width": 800,
        "textAlign": "center"
    },
    "article_context": {
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "author_logo": {
        "display": "inline-block",
        "width": 40,
        "height": 40,
        "backgroundColor": "rgb(109, 129, 210)",
        "verticalAlign": "top"
    },
    "article_wrap": {
        "textAlign": "left",
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "marginLeft": 30,
        "display": "inline-block",
        "verticalAlign": "top",
        "width": 500,
        "border": "1px solid #c6c6c6",
        "boxShadow": "10px 10px 5px #888888"
    },
    "foot_left": {
        "display": "inline-block"
    },
    "foot_right": {
        "display": "inline-block",
        "float": "right"
    },
    "foot_dropDown": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "display": "none"
    },
    "dropdown-menu": {
        "width": 50
    }
});