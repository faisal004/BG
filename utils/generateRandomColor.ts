import { positions } from "./positions";

const shapes = ['circle', 'ellipse'];
export const generateRandomColor = () => {
    const randomColor = () =>
        `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;

    const randomPercentage = () => Math.floor(Math.random() * 101);
    const randomShape = () => shapes[Math.floor(Math.random() * shapes.length)];
    const randomPosition = () => {
        const position = positions[Math.floor(Math.random() * positions.length)];
        return position.value;
    };
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
        shape: randomShape(),
        position: randomPosition(), 
    };
};