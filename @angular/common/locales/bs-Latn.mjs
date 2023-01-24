/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;
function plural(val) {
    const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, f = parseInt(val.toString().replace(/^[^.]*\.?/, ''), 10) || 0;
    if (v === 0 && (i % 10 === 1 && !(i % 100 === 11)) || f % 10 === 1 && !(f % 100 === 11))
        return 1;
    if (v === 0 && (i % 10 === Math.floor(i % 10) && (i % 10 >= 2 && i % 10 <= 4) && !(i % 100 >= 12 && i % 100 <= 14)) || f % 10 === Math.floor(f % 10) && (f % 10 >= 2 && f % 10 <= 4) && !(f % 100 >= 12 && f % 100 <= 14))
        return 3;
    return 5;
}
export default ["bs-Latn", [["prijepodne", "popodne"], ["AM", "PM"], ["prijepodne", "popodne"]], u, [["N", "P", "U", "S", "Č", "P", "S"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"]], [["n", "p", "u", "s", "č", "p", "s"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"], ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"], ["ned", "pon", "uto", "sri", "čet", "pet", "sub"]], [["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"], ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"], ["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"]], u, [["p.n.e.", "n.e."], ["p. n. e.", "n. e."], ["prije nove ere", "nove ere"]], 1, [6, 0], ["d. M. y.", "d. MMM y.", "d. MMMM y.", "EEEE, d. MMMM y."], ["HH:mm", "HH:mm:ss", "HH:mm:ss z", "HH:mm:ss zzzz"], ["{1} {0}", u, "{1} 'u' {0}", u], [",", ".", ";", "%", "+", "-", "E", "×", "‰", "∞", "NaN", ":"], ["#,##0.###", "#,##0 %", "#,##0.00 ¤", "#E0"], "BAM", "KM", "Bosanskohercegovačka konvertibilna marka", { "AUD": [u, "$"], "BAM": ["KM"], "BRL": [u, "R$"], "CAD": [u, "$"], "CNY": [u, "¥"], "GBP": [u, "£"], "HKD": [u, "$"], "HRK": ["kn"], "ILS": [u, "₪"], "MXN": [u, "$"], "NZD": [u, "$"], "PHP": [u, "₱"], "RSD": ["din."], "THB": ["฿"], "TWD": ["NT$"], "USD": [u, "$"], "XCD": [u, "$"], "XPF": [] }, "ltr", plural];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtTGF0bi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbW1vbi9sb2NhbGVzL2JzLUxhdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsMENBQTBDO0FBQzFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUVwQixTQUFTLE1BQU0sQ0FBQyxHQUFXO0lBQzNCLE1BQU0sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVqSyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztRQUNuRixPQUFPLENBQUMsQ0FBQztJQUNiLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxDQUFDO1FBQ3JOLE9BQU8sQ0FBQyxDQUFDO0lBQ2IsT0FBTyxDQUFDLENBQUM7QUFDVCxDQUFDO0FBRUQsZUFBZSxDQUFDLFNBQVMsRUFBQyxDQUFDLENBQUMsWUFBWSxFQUFDLFNBQVMsQ0FBQyxFQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsWUFBWSxFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsRUFBQyxDQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsUUFBUSxDQUFDLEVBQUMsQ0FBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLENBQUMsRUFBQyxDQUFDLFFBQVEsRUFBQyxTQUFTLEVBQUMsTUFBTSxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxNQUFNLENBQUMsRUFBQyxDQUFDLFVBQVUsRUFBQyxPQUFPLENBQUMsRUFBQyxDQUFDLGdCQUFnQixFQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsVUFBVSxFQUFDLFdBQVcsRUFBQyxZQUFZLEVBQUMsa0JBQWtCLENBQUMsRUFBQyxDQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLGVBQWUsQ0FBQyxFQUFDLENBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsS0FBSyxFQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsV0FBVyxFQUFDLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLEVBQUMsS0FBSyxFQUFDLElBQUksRUFBQywwQ0FBMEMsRUFBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUMsRUFBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLEVBQUMsR0FBRyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxFQUFDLEtBQUssRUFBQyxFQUFFLEVBQUMsRUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRlkuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwodmFsOiBudW1iZXIpOiBudW1iZXIge1xuY29uc3QgbiA9IHZhbCwgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnModmFsKSksIHYgPSB2YWwudG9TdHJpbmcoKS5yZXBsYWNlKC9eW14uXSpcXC4/LywgJycpLmxlbmd0aCwgZiA9IHBhcnNlSW50KHZhbC50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJyksIDEwKSB8fCAwO1xuXG5pZiAodiA9PT0gMCAmJiAoaSAlIDEwID09PSAxICYmICEoaSAlIDEwMCA9PT0gMTEpKSB8fCBmICUgMTAgPT09IDEgJiYgIShmICUgMTAwID09PSAxMSkpXG4gICAgcmV0dXJuIDE7XG5pZiAodiA9PT0gMCAmJiAoaSAlIDEwID09PSBNYXRoLmZsb29yKGkgJSAxMCkgJiYgKGkgJSAxMCA+PSAyICYmIGkgJSAxMCA8PSA0KSAmJiAhKGkgJSAxMDAgPj0gMTIgJiYgaSAlIDEwMCA8PSAxNCkpIHx8IGYgJSAxMCA9PT0gTWF0aC5mbG9vcihmICUgMTApICYmIChmICUgMTAgPj0gMiAmJiBmICUgMTAgPD0gNCkgJiYgIShmICUgMTAwID49IDEyICYmIGYgJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xucmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcImJzLUxhdG5cIixbW1wicHJpamVwb2RuZVwiLFwicG9wb2RuZVwiXSxbXCJBTVwiLFwiUE1cIl0sW1wicHJpamVwb2RuZVwiLFwicG9wb2RuZVwiXV0sdSxbW1wiTlwiLFwiUFwiLFwiVVwiLFwiU1wiLFwixIxcIixcIlBcIixcIlNcIl0sW1wibmVkXCIsXCJwb25cIixcInV0b1wiLFwic3JpXCIsXCLEjWV0XCIsXCJwZXRcIixcInN1YlwiXSxbXCJuZWRqZWxqYVwiLFwicG9uZWRqZWxqYWtcIixcInV0b3Jha1wiLFwic3JpamVkYVwiLFwixI1ldHZydGFrXCIsXCJwZXRha1wiLFwic3Vib3RhXCJdLFtcIm5lZFwiLFwicG9uXCIsXCJ1dG9cIixcInNyaVwiLFwixI1ldFwiLFwicGV0XCIsXCJzdWJcIl1dLFtbXCJuXCIsXCJwXCIsXCJ1XCIsXCJzXCIsXCLEjVwiLFwicFwiLFwic1wiXSxbXCJuZWRcIixcInBvblwiLFwidXRvXCIsXCJzcmlcIixcIsSNZXRcIixcInBldFwiLFwic3ViXCJdLFtcIm5lZGplbGphXCIsXCJwb25lZGplbGpha1wiLFwidXRvcmFrXCIsXCJzcmlqZWRhXCIsXCLEjWV0dnJ0YWtcIixcInBldGFrXCIsXCJzdWJvdGFcIl0sW1wibmVkXCIsXCJwb25cIixcInV0b1wiLFwic3JpXCIsXCLEjWV0XCIsXCJwZXRcIixcInN1YlwiXV0sW1tcImpcIixcImZcIixcIm1cIixcImFcIixcIm1cIixcImpcIixcImpcIixcImFcIixcInNcIixcIm9cIixcIm5cIixcImRcIl0sW1wiamFuXCIsXCJmZWJcIixcIm1hclwiLFwiYXByXCIsXCJtYWpcIixcImp1blwiLFwianVsXCIsXCJhdWdcIixcInNlcFwiLFwib2t0XCIsXCJub3ZcIixcImRlY1wiXSxbXCJqYW51YXJcIixcImZlYnJ1YXJcIixcIm1hcnRcIixcImFwcmlsXCIsXCJtYWpcIixcImp1bmlcIixcImp1bGlcIixcImF1Z3VzdFwiLFwic2VwdGVtYmFyXCIsXCJva3RvYmFyXCIsXCJub3ZlbWJhclwiLFwiZGVjZW1iYXJcIl1dLHUsW1tcInAubi5lLlwiLFwibi5lLlwiXSxbXCJwLiBuLiBlLlwiLFwibi4gZS5cIl0sW1wicHJpamUgbm92ZSBlcmVcIixcIm5vdmUgZXJlXCJdXSwxLFs2LDBdLFtcImQuIE0uIHkuXCIsXCJkLiBNTU0geS5cIixcImQuIE1NTU0geS5cIixcIkVFRUUsIGQuIE1NTU0geS5cIl0sW1wiSEg6bW1cIixcIkhIOm1tOnNzXCIsXCJISDptbTpzcyB6XCIsXCJISDptbTpzcyB6enp6XCJdLFtcInsxfSB7MH1cIix1LFwiezF9ICd1JyB7MH1cIix1XSxbXCIsXCIsXCIuXCIsXCI7XCIsXCIlXCIsXCIrXCIsXCItXCIsXCJFXCIsXCLDl1wiLFwi4oCwXCIsXCLiiJ5cIixcIk5hTlwiLFwiOlwiXSxbXCIjLCMjMC4jIyNcIixcIiMsIyMwwqAlXCIsXCIjLCMjMC4wMMKgwqRcIixcIiNFMFwiXSxcIkJBTVwiLFwiS01cIixcIkJvc2Fuc2tvaGVyY2Vnb3ZhxI1rYSBrb252ZXJ0aWJpbG5hIG1hcmthXCIse1wiQVVEXCI6W3UsXCIkXCJdLFwiQkFNXCI6W1wiS01cIl0sXCJCUkxcIjpbdSxcIlIkXCJdLFwiQ0FEXCI6W3UsXCIkXCJdLFwiQ05ZXCI6W3UsXCLCpVwiXSxcIkdCUFwiOlt1LFwiwqNcIl0sXCJIS0RcIjpbdSxcIiRcIl0sXCJIUktcIjpbXCJrblwiXSxcIklMU1wiOlt1LFwi4oKqXCJdLFwiTVhOXCI6W3UsXCIkXCJdLFwiTlpEXCI6W3UsXCIkXCJdLFwiUEhQXCI6W3UsXCLigrFcIl0sXCJSU0RcIjpbXCJkaW4uXCJdLFwiVEhCXCI6W1wi4Li/XCJdLFwiVFdEXCI6W1wiTlQkXCJdLFwiVVNEXCI6W3UsXCIkXCJdLFwiWENEXCI6W3UsXCIkXCJdLFwiWFBGXCI6W119LFwibHRyXCIsIHBsdXJhbF07XG4iXX0=