export default function formatCount(count) {
    const numericCount = typeof count === 'string' ? parseInt(count, 10) : count;

    if (isNaN(numericCount)) {
        return ''
    }

    if (numericCount === 0) {
        return '';
    } else if (numericCount > 99) {
        return '+99';
    } else {
        return numericCount.toString();
    }
}