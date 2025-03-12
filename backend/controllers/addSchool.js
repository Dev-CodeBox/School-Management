const mydb = require("../config/db.connect");

exports.addSchool = async (request, response) => {
  const { name, address } = request.body;
  const latitude = Number(Number(request.body.latitude).toFixed(6));
  const longitude = Number(Number(request.body.longitude).toFixed(6));
  if (!name?.trim()) {
    return response.status(400).json({ message: "Name is required" });
  }
  if (!address?.trim()) {
    return response.status(400).json({ message: "Address is required" });
  }
  if (!latitude || isNaN(latitude) || latitude < -90 || latitude > 90) {
    return response.status(400).json({ message: "Invalid latitude" });
  }
  if (!longitude || isNaN(longitude) || longitude < -180 || longitude > 180) {
    return response.status(400).json({ message: "Invalid longitude" });
  }

  try {
    const [existingSchool] = await mydb.execute(
      `SELECT id FROM schools WHERE LOWER(TRIM(name)) = LOWER(TRIM(?)) AND LOWER(TRIM(address)) = LOWER(TRIM(?)) AND ROUND(latitude, 6) = ROUND(?, 6) AND ROUND(longitude, 6) = ROUND(?, 6)`,
      [name, address, latitude, longitude]
    );
    if (existingSchool && existingSchool.length > 0) {
      return response.status(400).json({ message: "School already exists" });
    }
    const [result] = await mydb.execute(
      `INSERT INTO schools (name, address, latitude, longitude) VALUES (?,?,?,?)`,
      [name, address, latitude, longitude]
    );
    response.status(201).json({
      message: "School added successfully",
      id: result.insertId,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
