const Analyzer = require('../lib/analyzer')
const Candidate = require('../lib/candidate')

describe('Analyzer', () => {
    const analyzer = new Analyzer()
    var candidateArray = []

    test('Empty or null array', () => {
        expect(() => {
            analyzer.analyze([])
        }).toThrow('Empty or null array')
        expect(() => {
            analyzer.analyze(null)
        }).toThrow('Empty or null array')
    })

    test('Without competition context', () => {
        candidateArray.push(new Candidate('M', 17))
        analyzer.analyze(candidateArray)
        expect(analyzer.statistics.male).toBe(1)
        expect(analyzer.statistics.female).toBe(0)
        expect(analyzer.statistics.averageAge).toBe(17)
        expect(analyzer.statistics.context).toBe('Without competition')
    })

    test('Polarized context', () => {
        candidateArray.push(new Candidate('F', 18))
        analyzer.analyze(candidateArray)
        expect(analyzer.statistics.male).toBe(1)
        expect(analyzer.statistics.female).toBe(1)
        expect(analyzer.statistics.averageAge).toBe(17.5)
        expect(analyzer.statistics.context).toBe('Polarized')
    })

    test('Normal context', () => {
        candidateArray.push(new Candidate('F', 22))
        analyzer.analyze(candidateArray)
        expect(analyzer.statistics.male).toBe(1)
        expect(analyzer.statistics.female).toBe(2)
        expect(analyzer.statistics.averageAge).toBe(19)
        expect(analyzer.statistics.context).toBe('Normal')
    })
})