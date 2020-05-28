exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("classes")
    .delete()
    .then(function () {
      // Inserts seed entries
      return knex("classes").insert([
        {
          name: "CrossFit",
          date: "Thursday & Saturday",
          location: "123 Main Street",
          type: "general",
          startTime: "11:00 AM",
          intensityLevel: "medium",
          description:
            "With constantly varied, high-intensity functional movements, CrossFit is a training philosophy that coaches people of all shapes and sizes to improve their physical well-being and cardiovascular fitness in a hardcore yet accepting and encouraging environment.",
          duration: "60 minutes",
          instructorId: 1,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80",
        },
        {
          name: "Tai-Chi",
          date: "Saturday",
          location: "456 Parker Ave",
          type: "martial-art",
          startTime: "1:00 PM",
          intensityLevel: "hard",
          description:
            "Tai chi is an ancient Chinese tradition that, today, is practiced as a graceful form of exercise. It involves a series of movements performed in a slow, focused manner and accompanied by deep breathing.",
          duration: "60 minutes",
          instructorId: 3,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1555597408-26bc8e548a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1096&q=80",
        },
        {
          name: "Yoga",
          date: "Sunday",
          location: "1600 Fox Drive",
          type: "Yoga",
          startTime: "9:00 AM",
          intensityLevel: "easy",
          description:
            "In this class the basic, foundational yoga postures are practiced to align, strengthen and promote flexibility in the body. Breathing techniques and meditation are also integrated. You can expect an emphasis on simplicity, repetition, and ease of movement.",
          duration: "45 minutes",
          instructorId: 1,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1094&q=80",
        },
        {
          name: "Pilates",
          date: "Monday, Wednesday, Saturday",
          location: "123 Main Street",
          type: "general",
          startTime: "2:00 PM",
          intensityLevel: "easy",
          description:
            "Pilates is a method of exercise that consists of low-impact flexibility and muscular strength and endurance movements. Pilates emphasizes proper postural alignment, core strength and muscle balance.",
          duration: "45 minutes",
          instructorId: 3,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        },
        {
          name: "Spin Class",
          date: "Saturday",
          location: "5100 Main Street",
          type: "bike, cardio",
          startTime: "11:00 AM",
          intensityLevel: "Medium",
          description:
            "Spin class is a group exercise class that provides super intense cardio workout using a spin bike. There will be times when you sit, times when you stand and pedal, times when you up the resistance as if going uphill, and if you are a beginner, there may be times when you feel you can’t keep up. That’s OK, many feel that way at first, but you got this. You must wear sung fitting yoga pants or tights, put your hair up and out of the way and bring a water bottle because you ARE going to sweat.",
          duration: "45 minutes",
          instructorId: 1,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1583149203172-dd969547d62c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
        },
        {
          name: "Zumba",
          date: "Monday and Wednesday",
          location: "2200 Main Street",
          type: "dancing, aerobic",
          startTime: "11:00 AM",
          intensityLevel: "Easy",
          description:
            "Zumba is a really fun, energetic dance group class that is a great aerobic workout. The moves are inspired by the passionate Latin dancing arts. It is great for ALL fitness levels and attracts people of all ages. It just feels so good to dance, you barely feel like you are getting a workout, but you are!",
          duration: "60 minutes",
          instructorId: 3,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        },
        {
          name: "Barre",
          date: "Tuesday & Thursday ",
          location: "2100 Main Street",
          type: "posture",
          startTime: "11:00 AM",
          intensityLevel: "Easy",
          description:
            "Wear a pair of leggings, no-slip socks, grab a water bottle and you are set. Barre class if for all ages and body types so it’s a good class for beginners, and it also provides plenty of challenge for more experienced athletes. Of all the different types of workout classes, Barre class is the one that improves your posture and gives you an awareness of how you move your body the most, which translates to benefits outside of class.",
          duration: "60 minutes",
          instructorId: 1,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        },
        {
          name: "TRX",
          date: "Everyday",
          location: "910 Main Street",
          type: "strength, coordination, balance, flexibility",
          startTime: "9:00 AM",
          intensityLevel: "Easy",
          description:
            "TRX class is great for gaining strength, coordination, balance, and flexibility. It is really easy to adjust to your fitness level because simply changing your position relative to the anchor point makes the exercise easier or harder. This makes the class inclusive and appropriate for all fitness levels.",
          duration: "60 minutes",
          instructorId: 3,
          maxClassSize: 20,
          image:
            "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        },
      ]);
    });
};
