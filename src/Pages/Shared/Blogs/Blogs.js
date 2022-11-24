import React from "react";

const Blogs = () => {
  return (
    <div className="my-5 grid gap-5">
      {/* question 1  */}
      <div className=" card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p>
            The state of any application is represented by the user interface of
            the application. The state is mutable and whenever the user
            interacts with the application and changes its state, the user
            interface of the app may change as it will be represented by the new
            state. These states can be managed by a React component. The main
            objectives of the react component are to store the state and allow
            it to get updated once the user interacts with the application. It
            also ensures that the UI change whenever there is any update in the
            State. In this article, we will explain the ways to manage the
            states. In this topic, we are going to learn about React State
            Management. 1) React Component Props This is the most basic way to
            manage state for your components, you simply pass the state via
            props. 2) React Context React Context was added to React to help
            solve the problem of sharing state between multiple components,
            especially between ones that are not close in the component
            hierarchy. 3) Redux state management
          </p>
        </div>
      </div>
      {/* question 2  */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            How does prototypical inheritance work?
          </h2>
          <p>
            Prototype Inheritance in JavaScript: Following bullet points will
            try to analyze the basics behind Prototype Inheritance in
            JavaScript- Under the classical inheritance phenomenon, we create a
            new class that actually extends or reuses the properties or
            functions, or methods of another class that are used by several
            programming languages (like C, C++, Java, etc.) JavaScript doesn’t
            use classical inheritance instead it uses the phenomenon called
            Prototype Inheritance. In Prototype Inheritance, an object uses the
            properties or methods of another object via the prototype linkage.
            All the JavaScript objects inherit properties and methods from a
            prototype (like Date objects inherit properties from Date.prototype
            and so on).
          </p>
        </div>
      </div>
      {/* question 3  */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p>
            Some developers underestimate the importance of writing unit tests.
            What follows are five benefits of unit testing that you may want to
            consider before forming your own opinion. Any bugs are found easily
            and quicker Code covered with tests is more reliable than the code
            without. If a future change breaks something in the code, developers
            will be able to identify the root of the problem right away rather
            than coming through an unwieldy codebase to find the issue. Best
            practices suggest that developers first run all unit tests or a
            group of tests locally to make sure any coding changes don’t disrupt
            the existing code. However, consider the human factor: A developer
            might forget to run unit tests after making changes and submit
            potentially non-working code to a common branch. To avoid this, many
            companies apply a continuous development approach. Tools for
            continuous integration are used for this, allowing developers to run
            unit tests automatically. Thus, any unwanted changes in the code
            will be detected by a cold, logical machine. The speed of detecting
            non-working code depends on the tools used for continuous
            integration. Tests can be set to run either a one-time check at a
            certain time interval or can be run immediately in real-time to
            review changes. In short, unit tests help developers detect problems
            immediately, then fix them quickly. With fewer resources spent
            finding bugs, teams can move on to the next phase of a project.
          </p>
        </div>
      </div>
      {/* question 4  */}
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">React vs. Angular vs. Vue?</h2>
          <p>
            <strong className="underline">React:</strong>React is the JavaScript
            library of User Interfaces. It is build single-page applications and
            also allows you to create reusable UI components. It is a front-end
            JavaScript framework, created by Facebook in 2011. The initial
            version (V0.3.0) was released in July 2013. The latest version is
            V5.0.1. It has a size of 31.8K. This complete guide on How To Learn
            ReactJS: A Complete Guide For Beginners will help in making your
            transition towards React if you’re a beginner. Popularity – React
            has gained a lot of popularity in recent years and is considered one
            of the best frameworks for web development. There are more
            developers who keep React as a priority for creating wonderful
            websites. Companies like Uber, Airbnb, Netflix, Yahoo!, and The New
            York Times use React for their front-end development. <br />
            <strong className="underline">Angular:</strong>Angular, developed by
            Google, was released in the year 2010. It is a TypeScript-based
            framework that uses a regular DOM. Angular provides a set of tools
            using which a complex, reactive UI can be built. It is primarily
            aimed at creating SPAs (Single Page Applications) and performs
            various operations such as routing, state management, PWA, testing,
            and building, having a size of 143K. Popularity – Angular is used by
            Google, Upwork, and MS Office and since this framework was
            implemented before React, it is more popular providing a highly
            functional framework to create larger applications.
            <br />
            <strong className="underline">Vue:</strong>Vue was developed by a
            former Google employee and was released in the year 2014. It was
            developed to make the best version of Angular and make a custom
            tool. It is used for developing single-page engaging and
            high-quality web applications. It lets you extend directives (HTML
            with HTML attributes), and also provides built-in directives and
            user-defined directives. It is the lightest framework having a size
            of 23K. Popularity – Vue has become so popular these days and it is
            one of the hottest topics in terms of technology. Companies that use
            Vue as their front-end development framework are UpWork, Netflix,
            and Nintendo. It has a good rating on GitHub making it so popular.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
