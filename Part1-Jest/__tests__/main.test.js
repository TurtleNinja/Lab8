const main = require('../assets/scripts/main');

describe('format volume icon', () => {
    test('icon volume level 3', () => {
        expect(main(89)).toContain('volume-level-3.svg');
    });

    test('icon volume level 2', () => {
        expect(main(65)).toContain('volume-level-2.svg');
    });
    
    test('icon volume level 1', () => {
        expect(main(20)).toContain('volume-level-1.svg');
    });
    
    test('icon volume level 0', () => {
        expect(main(0)).toContain('volume-level-0.svg');
    });
});

