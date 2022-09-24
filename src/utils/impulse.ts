export const randomBackground = () => {
    const colors = [
        "#FFC0CB",
        "#FFB6C1",
        "#FF69B4",
        "#FF1493",
        "#DB7093",
        "#C71585",
        "#DA70D6",
        "#D8BFD8",
        "#DDA0DD",
        "#EE82EE",
        "#FF00FF",
        "#FF00FF",
        "#BA55D3",
        "#9400D3",
        "#9932CC",
        "#8A2BE2",
        "#9370DB",
        "#7B68EE",
        "#6A5ACD",
        "#483D8B",
        "#E6E6FA",
        "#D8BFD8",
        "#DDA0DD",
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
};