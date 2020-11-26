# About The Project

**Latt** is a simple *full-fledged learning platform* for (specifically but not exclusively) software development teams. It provides teams with easy and fast way to organize and present learning materials to team members with different knowledge levels. Integrated system of skills assessment allows for delivering specific and personalized chunks of theoretical and practical training resources.

The Latt approach is to provide a student with a set of **Learning Paths** (for instance, React Developer Path, or Ruby on Rails Developer Path) to choose from. After the student has chosen a particular Path, he passes a **Skill Assessment** which detects which **Courses** of this path are required to be taken, and which are optional. Finally, he gets the personalized **Course List**. Each **Course** in its turn consists of theoretical materials (**Articles**) and practical challenges (**Labs**). By the end of the selective learning process the student gets possibility to re-assess his skills and call the journey finished.

Platform-wise Latt consists of a **three parts**:

* **[REST API](../backend/README.md)** with all the learning materials 
* **[CMS](../admin/README.md)** for working with the REST API
* **[PWA](../frontend/README.md)** and **cross-platform mobile app** for accessing the learning resources

This platform is fully open-source and can be [self-hosted](./self-hosting.md) and customized for needs of any team.
