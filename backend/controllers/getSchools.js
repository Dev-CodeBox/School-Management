const mydb = require("../config/db.connect");

exports.getSchoolsByProximity = async (request, response) => {
  const { latitude, longitude } = request.query;
  if (!latitude || isNaN(latitude) || latitude < -90 || latitude > 90) {
    return response.status(400).json({ message: "Invalid latitude" });
  }
  if (!longitude || isNaN(longitude) || longitude < -180 || longitude > 180) {
    return response.status(400).json({ message: "Invalid longitude" });
  }
  try {
    const [schools] = await mydb.execute(
      `SELECT id, name, address, latitude, longitude,
                (6371 * acos(cos(radians(?)) * cos(radians(latitude)) * 
                cos(radians(longitude) - radians(?)) + 
                sin(radians(?)) * sin(radians(latitude)))) AS distance 
            FROM schools
            ORDER BY distance ASC;
        `,
      [latitude, longitude, latitude]
    );
    response.status(200).json(schools);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
