const sql = jest.fn();

sql.mockResolvedValue([]); // Mocking the SQL query to return an empty array by default

export default sql;