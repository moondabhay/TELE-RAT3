const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '7904502502:AAGkEzhu1kBivwBUvnb0pFQkzPcywN78JGA',
  id: isNaN(parsedId) ? 7158580244 : parsedId // replace 12345.. with your telegram chat id
};
