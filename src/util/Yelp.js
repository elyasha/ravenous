const apiKey =
  "3An9RJlFHFmEee-4CGXUeoJhbQrS4ev8hG53gslnP-_dc5h_yWO3Dk6Xoaw9Gl-_ot9Ubd9hsd-qGNMkPboxA-Tyce1u45n4XzPNJdPUYgzb_V1pbYOgah4Wkf2kYnYx";
const clientId = "06ce7MNwB4acKi_3E0G6GA";

const Yelp = {
  search: (term, location, sortBy) => {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            };
          });
        }
      });
  },
};

export default Yelp
