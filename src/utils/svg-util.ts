export class SVGUtil {

    static changetoRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    static convertToScale(valueMap: { [key: string]: number }): Map<string, number> {
        let result = new Map<string, number>();
        let max = 0;
        Object.keys(valueMap).forEach(key => {
            max = valueMap[key] > max ? valueMap[key] : max;
        })

        Object.keys(valueMap).forEach((key) => {
            result.set(key, valueMap[key] / max)
        })
        return result;
    }

    static scaleMaptoColour(averageMap: Map<string, number>, rgbScale: { r: number, g: number, b: number }): Map<string, string> {
        let result = new Map<string, string>();
        averageMap.forEach((value, key) => {
            const r = Math.floor(value * rgbScale.r);
            const g = Math.floor(value * rgbScale.g);
            const b = Math.floor(value * rgbScale.b);
            result.set(key, `rgb(${r}, ${g}, ${b})`)
        })

        return result;
    }
}
