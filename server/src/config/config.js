/**
 * local默认配置
 * @author xuxh
 */
module.exports = {
  redisConfig: {
    host: "localhost",
    port: "6379",
    password: "123456",
    db: 2,
  },
  // MySQL 配置
  dbConfig: {
    database: "yuindex",
    username: "root",
    password: "root",
    host: "localhost",
    port: 3306,
  },
};
