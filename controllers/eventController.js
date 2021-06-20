const { Event } = require("../db/models");

exports.createEvent = async (req, res) => {
  try {
    const nweEvent = await Event.create(req.body);
    res.status(201).json(nweEvent);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};

exports.deletEvent = async (req, res) => {
  try {
    const findEvents = await Event.findByPk(req.params.eventID);
    if (Event) {
        await Event.destroy({ where: { id: req.body.ids.split(",") } });
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    } catch (error) {
      res.status(500).json({ message: error.message || "Server Error" });
    }
};
exports.updateEvents = async (req, res) => {
  try {
    const findEvents = await Event.findByPk(req.params.id);
    if (findEvents) {
      findEvents.update(req.body );
      res.status(201).end();
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};

exports.eventList = async (req, res) => {
  try {
    const Events = await Event.findAll();
    res.json(Events);
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
exports.detaileEvent = async (req, res) => {
  try {
    const findEvents = await Event.findByPk(req.params.eventID);
    if (findEvents) {
      res.json(findEvents);
    } else {
      res.status(404).end();
    }
  } catch (error) {
    res.status(500).json({ message: error.message || "Server Error" });
  }
};
