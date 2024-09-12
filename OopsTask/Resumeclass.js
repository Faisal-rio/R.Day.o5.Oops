class Resume {
  constructor(name, email, phone, education, experience, skills) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.education = education;
    this.experience = experience;
    this.skills = skills;
  }

  toJSON() {
    return {
      name: this.name,
      email: this.email,
      phone: this.phone,
      education: this.education,
      experience: this.experience,
      skills: this.skills,
    };
  }
}

const myResume = new Resume(
  "Sharavanakumar",
  "shark.35.kumar@gmail.com",
  "+919894359853",
  [
    {
      degree: "Master of Science",
      school: "PSG College of Technology",
      year: 2021,
    },
  ],
  [
    {
      position: "Member Technical Staff",
      company: "Linx Works Pvt. Ltd.",
      year: 2021,
    },
  ],
  ["JavaScript", "React", "Node.js", "HTML", "CSS"]
);

const resumeJSON = JSON.stringify(myResume.toJSON(), null, 2);
console.log(resumeJSON);
