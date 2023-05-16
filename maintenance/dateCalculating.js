export const calculateDateMatching = (shiftStart, shiftEnd) => {
    const myDate = new Date().getTime()
    const currentlyInShift = myDate - shiftStart > 0 && myDate - shiftEnd < 0
    return currentlyInShift
}