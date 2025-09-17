const Parser = require('../src/Parser.js');
const {text, boldText, italicText, link, listItemSimple, listItemComplex, unorderedList, paragraph} = require ('./testData.js');

describe ('Given a rich text editor JSON object, ', () => {

    test('parsed text should return transformed JSON object. ', ()=>{
       expect(Parser.text(text.raw)).toStrictEqual(text.parsed);
    });

    test('parsed bold text should return transformed JSON object. ', ()=>{
        expect(Parser.boldText(boldText.raw)).toStrictEqual(boldText.parsed);
    });

    test('parsed italic text should return transformed JSON object. ', ()=>{
        expect(Parser.italicText(italicText.raw)).toStrictEqual(italicText.parsed);
    });

    test('parsed link should return transformed JSON object. ', ()=>{
        expect(Parser.link(link.raw)).toStrictEqual(link.parsed);
    });

    test('parsed list item should return transformed JSON object. ', ()=>{
        expect(Parser.listItem(listItemSimple.raw)).toStrictEqual(listItemSimple.parsed);
        expect(Parser.listItem(listItemComplex.raw)).toStrictEqual(listItemComplex.parsed);
    });

    test('parsed unordered list should return transformed JSON object. ', ()=>{
        expect(Parser.unorderedList(unorderedList.raw)).toStrictEqual(unorderedList.parsed);
    });

    test('parsed paragraph should return transformed JSON object. ', ()=>{
        expect(Parser.paragraph(paragraph.raw)).toStrictEqual(paragraph.parsed);
    });
});