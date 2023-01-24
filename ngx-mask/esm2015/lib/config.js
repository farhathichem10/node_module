import { InjectionToken } from '@angular/core';
export const config = new InjectionToken('config');
export const NEW_CONFIG = new InjectionToken('NEW_CONFIG');
export const INITIAL_CONFIG = new InjectionToken('INITIAL_CONFIG');
export const initialConfig = {
    suffix: '',
    prefix: '',
    thousandSeparator: ' ',
    decimalMarker: '.',
    clearIfNotMatch: false,
    showTemplate: false,
    showMaskTyped: false,
    placeHolderCharacter: '_',
    dropSpecialCharacters: true,
    hiddenInput: undefined,
    shownMaskExpression: '',
    separatorLimit: '',
    allowNegativeNumbers: false,
    validation: true,
    // tslint:disable-next-line: quotemark
    specialCharacters: ['-', '/', '(', ')', '.', ':', ' ', '+', ',', '@', '[', ']', '"', "'"],
    leadZeroDateTime: false,
    patterns: {
        '0': {
            pattern: new RegExp('\\d'),
        },
        '9': {
            pattern: new RegExp('\\d'),
            optional: true,
        },
        X: {
            pattern: new RegExp('\\d'),
            symbol: '*',
        },
        A: {
            pattern: new RegExp('[a-zA-Z0-9]'),
        },
        S: {
            pattern: new RegExp('[a-zA-Z]'),
        },
        d: {
            pattern: new RegExp('\\d'),
        },
        m: {
            pattern: new RegExp('\\d'),
        },
        M: {
            pattern: new RegExp('\\d'),
        },
        H: {
            pattern: new RegExp('\\d'),
        },
        h: {
            pattern: new RegExp('\\d'),
        },
        s: {
            pattern: new RegExp('\\d'),
        },
    },
};
export const timeMasks = ['Hh:m0:s0', 'Hh:m0', 'm0:s0'];
export const withoutValidation = [
    'percent',
    'Hh',
    's0',
    'm0',
    'separator',
    'd0/M0/0000',
    'd0/M0',
    'd0',
    'M0',
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW1hc2stbGliL3NyYy9saWIvY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE2Qi9DLE1BQU0sQ0FBQyxNQUFNLE1BQU0sR0FBNEIsSUFBSSxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDNUUsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUE0QixJQUFJLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNwRixNQUFNLENBQUMsTUFBTSxjQUFjLEdBQTRCLElBQUksY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFFNUYsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFZO0lBQ3BDLE1BQU0sRUFBRSxFQUFFO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixpQkFBaUIsRUFBRSxHQUFHO0lBQ3RCLGFBQWEsRUFBRSxHQUFHO0lBQ2xCLGVBQWUsRUFBRSxLQUFLO0lBQ3RCLFlBQVksRUFBRSxLQUFLO0lBQ25CLGFBQWEsRUFBRSxLQUFLO0lBQ3BCLG9CQUFvQixFQUFFLEdBQUc7SUFDekIscUJBQXFCLEVBQUUsSUFBSTtJQUMzQixXQUFXLEVBQUUsU0FBUztJQUN0QixtQkFBbUIsRUFBRSxFQUFFO0lBQ3ZCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLG9CQUFvQixFQUFFLEtBQUs7SUFDM0IsVUFBVSxFQUFFLElBQUk7SUFDaEIsc0NBQXNDO0lBQ3RDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztJQUN6RixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLFFBQVEsRUFBRTtRQUNSLEdBQUcsRUFBRTtZQUNILE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxHQUFHLEVBQUU7WUFDSCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLFFBQVEsRUFBRSxJQUFJO1NBQ2Y7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQzFCLE1BQU0sRUFBRSxHQUFHO1NBQ1o7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDO1NBQ25DO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLFVBQVUsQ0FBQztTQUNoQztRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELENBQUMsRUFBRTtZQUNELE9BQU8sRUFBRSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxDQUFDLEVBQUU7WUFDRCxPQUFPLEVBQUUsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsQ0FBQyxFQUFFO1lBQ0QsT0FBTyxFQUFFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztTQUMzQjtLQUNGO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBYSxDQUFDLFVBQVUsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFFbEUsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQWE7SUFDekMsU0FBUztJQUNULElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLFdBQVc7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLElBQUk7SUFDSixJQUFJO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbmZpZyB7XG4gIHN1ZmZpeDogc3RyaW5nO1xuICBwcmVmaXg6IHN0cmluZztcbiAgdGhvdXNhbmRTZXBhcmF0b3I6IHN0cmluZztcbiAgZGVjaW1hbE1hcmtlcjogJy4nIHwgJywnO1xuICBjbGVhcklmTm90TWF0Y2g6IGJvb2xlYW47XG4gIHNob3dUZW1wbGF0ZTogYm9vbGVhbjtcbiAgc2hvd01hc2tUeXBlZDogYm9vbGVhbjtcbiAgcGxhY2VIb2xkZXJDaGFyYWN0ZXI6IHN0cmluZztcbiAgc2hvd25NYXNrRXhwcmVzc2lvbjogc3RyaW5nO1xuICBkcm9wU3BlY2lhbENoYXJhY3RlcnM6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgc3BlY2lhbENoYXJhY3RlcnM6IHN0cmluZ1tdO1xuICBoaWRkZW5JbnB1dDogYm9vbGVhbiB8IHVuZGVmaW5lZDtcbiAgdmFsaWRhdGlvbjogYm9vbGVhbjtcbiAgc2VwYXJhdG9yTGltaXQ6IHN0cmluZztcbiAgYWxsb3dOZWdhdGl2ZU51bWJlcnM6IGJvb2xlYW47XG4gIGxlYWRaZXJvRGF0ZVRpbWU6IGJvb2xlYW47XG4gIHBhdHRlcm5zOiB7XG4gICAgW2NoYXJhY3Rlcjogc3RyaW5nXToge1xuICAgICAgcGF0dGVybjogUmVnRXhwO1xuICAgICAgb3B0aW9uYWw/OiBib29sZWFuO1xuICAgICAgc3ltYm9sPzogc3RyaW5nO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCB0eXBlIG9wdGlvbnNDb25maWcgPSBQYXJ0aWFsPElDb25maWc+O1xuZXhwb3J0IGNvbnN0IGNvbmZpZzogSW5qZWN0aW9uVG9rZW48SUNvbmZpZz4gPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ2NvbmZpZycpO1xuZXhwb3J0IGNvbnN0IE5FV19DT05GSUc6IEluamVjdGlvblRva2VuPElDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuKCdORVdfQ09ORklHJyk7XG5leHBvcnQgY29uc3QgSU5JVElBTF9DT05GSUc6IEluamVjdGlvblRva2VuPElDb25maWc+ID0gbmV3IEluamVjdGlvblRva2VuKCdJTklUSUFMX0NPTkZJRycpO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbENvbmZpZzogSUNvbmZpZyA9IHtcbiAgc3VmZml4OiAnJyxcbiAgcHJlZml4OiAnJyxcbiAgdGhvdXNhbmRTZXBhcmF0b3I6ICcgJyxcbiAgZGVjaW1hbE1hcmtlcjogJy4nLFxuICBjbGVhcklmTm90TWF0Y2g6IGZhbHNlLFxuICBzaG93VGVtcGxhdGU6IGZhbHNlLFxuICBzaG93TWFza1R5cGVkOiBmYWxzZSxcbiAgcGxhY2VIb2xkZXJDaGFyYWN0ZXI6ICdfJyxcbiAgZHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiB0cnVlLFxuICBoaWRkZW5JbnB1dDogdW5kZWZpbmVkLFxuICBzaG93bk1hc2tFeHByZXNzaW9uOiAnJyxcbiAgc2VwYXJhdG9yTGltaXQ6ICcnLFxuICBhbGxvd05lZ2F0aXZlTnVtYmVyczogZmFsc2UsXG4gIHZhbGlkYXRpb246IHRydWUsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogcXVvdGVtYXJrXG4gIHNwZWNpYWxDaGFyYWN0ZXJzOiBbJy0nLCAnLycsICcoJywgJyknLCAnLicsICc6JywgJyAnLCAnKycsICcsJywgJ0AnLCAnWycsICddJywgJ1wiJywgXCInXCJdLFxuICBsZWFkWmVyb0RhdGVUaW1lOiBmYWxzZSxcbiAgcGF0dGVybnM6IHtcbiAgICAnMCc6IHtcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXG4gICAgfSxcbiAgICAnOSc6IHtcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXG4gICAgICBvcHRpb25hbDogdHJ1ZSxcbiAgICB9LFxuICAgIFg6IHtcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXG4gICAgICBzeW1ib2w6ICcqJyxcbiAgICB9LFxuICAgIEE6IHtcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1thLXpBLVowLTldJyksXG4gICAgfSxcbiAgICBTOiB7XG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdbYS16QS1aXScpLFxuICAgIH0sXG4gICAgZDoge1xuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcbiAgICB9LFxuICAgIG06IHtcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXG4gICAgfSxcbiAgICBNOiB7XG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxuICAgIH0sXG4gICAgSDoge1xuICAgICAgcGF0dGVybjogbmV3IFJlZ0V4cCgnXFxcXGQnKSxcbiAgICB9LFxuICAgIGg6IHtcbiAgICAgIHBhdHRlcm46IG5ldyBSZWdFeHAoJ1xcXFxkJyksXG4gICAgfSxcbiAgICBzOiB7XG4gICAgICBwYXR0ZXJuOiBuZXcgUmVnRXhwKCdcXFxcZCcpLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgdGltZU1hc2tzOiBzdHJpbmdbXSA9IFsnSGg6bTA6czAnLCAnSGg6bTAnLCAnbTA6czAnXTtcblxuZXhwb3J0IGNvbnN0IHdpdGhvdXRWYWxpZGF0aW9uOiBzdHJpbmdbXSA9IFtcbiAgJ3BlcmNlbnQnLFxuICAnSGgnLFxuICAnczAnLFxuICAnbTAnLFxuICAnc2VwYXJhdG9yJyxcbiAgJ2QwL00wLzAwMDAnLFxuICAnZDAvTTAnLFxuICAnZDAnLFxuICAnTTAnLFxuXTtcbiJdfQ==