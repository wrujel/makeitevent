import Event from "../models/Event";

export const createEvent = async (req, res) => {
  const {
    title,
    date,
    followers,
    about,
    time_start,
    time_end,
    location,
    imgURL,
  } = req.body;

  try {
    const newEvent = new Event({
      title,
      date,
      followers,
      about,
      time_start,
      time_end,
      location,
      imgURL,
    });

    const eventSaved = await newEvent.save();

    res.json(eventSaved);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getEventById = async (req, res) => {
  const { eventId } = req.params;

  const event = await Event.findById(eventId);
  res.json(event);
};

export const getEvent = async (req, res) => {
  const events = await Event.find();
  return res.json(events);
};

export const updateEventById = async (req, res) => {
  const updatedEvent = await Event.findByIdAndUpdate(
    req.params.eventId,
    req.body,
    {
      new: true,
    }
  );
  res.json(updatedEvent);
};

export const deleteEventById = async (req, res) => {
  const { eventId } = req.params;

  await Event.findByIdAndDelete(eventId);

  res.json();
};
