export const generateRandomColor = () => {
    const randomColor = () =>
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    const randomPercentage = () => Math.floor(Math.random() * 101);

    return {
        colors: {
            from: randomColor(),
            via: randomColor(),
            to: randomColor(),
        },
        percentages: {
            from: randomPercentage(),
            via: randomPercentage(),
            to: randomPercentage(),
        },
    };
};