exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("classes")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          name: "CrossFit",
          schedule: "Thursday & Saturday 11:00 AM",
          location: "123 Main Street",
          type: "general",
          start_time: "06/30/2020",
          intensity: "medium",
          currently_registered: 3,
          duration: "1 month",
          class_size: 20,
          instructor_id: 1,
        },
        {
          name: "Tai-Chi",
          schedule: "Saturday 11:00 AM",
          location: "456 Parker Ave",
          type: "martial-art",
          start_time: "06/20/2020",
          intensity: "hard",
          currently_registered: 5,
          duration: "3 months",
          class_size: 15,
          instructor_id: 3,
        },
        {
          name: "Yoga",
          schedule: "Sunday 9:00 AM",
          location: "1600 Fox Drive",
          type: "Yoga",
          start_time: "06/28/2020",
          intensity: "easy",
          currently_registered: 10,
          duration: "1 month",
          class_size: 30,
          instructor_id: 1,
        },
        {
          name: "Pilates",
          schedule: "MWF 11:00 AM",
          location: "123 Main Street",
          type: "general",
          start_time: "06/15/2020",
          intensity: "easy",
          currently_registered: 4,
          duration: "1 month",
          class_size: 20,
          instructor_id: 3,
        },
      ]);
    });
};
