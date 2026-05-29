export const businessStreetAddress = '2ND FLOOR, BTR TOWER, My Home Mangala Rd, Prem Nagar, Kondapur, Hyderabad, Telangana 500049';
export const businessAddressShort = '2ND FLOOR, BTR TOWER, My Home Mangala Rd, Prem Nagar, Kondapur, Hyderabad 500049';
export const businessLocality = 'Kondapur';
export const businessRegion = 'Telangana';
export const businessCountry = 'India';
export const googleMapsQuery = encodeURIComponent(businessAddressShort);
export const googleMapsUrl = `https://maps.google.com/?q=${googleMapsQuery}`;
export const googleMapsEmbedUrl = `https://maps.google.com/maps?q=${googleMapsQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`;