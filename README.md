# react-component-creator

This project is a command-line tool that helps simplify the process of creating components and pages for React applications. The primary goal of the project is to reduce the amount of time and effort required to create components and pages, enabling developers to focus on other important tasks.

## Getting Started

To use this tool, you will need to create an empty JavaScript file in the root directory of your project and copy the code from this project into that file. If necessary, you can modify the code to fit your personal style and preferences.

Once you have the script set up, you can run it by executing the following command in your terminal:

```
node filename.js action-flag component1 component2 ... componentN
```

Replace "filename.js" with the name of the file you created, "action-flag" with the appropriate flag for the action you want to perform:

* --component or -c to create a component
* --page or -p to create a page

You can pass the names of the components or pages you want to create in PascalCase, camelCase, or kebab-case notation. The script will convert the names to PascalCase notation by default.

The script will create the necessary directories and files in a structured manner, allowing you to easily organize and manage your project. By default, the structure is designed for projects that use styled-components, but it can also be used with CSS modules by replacing the file extension "ComponentName.styled.jsx" with "ComponentName.module.css".

The structure of the created files and folders will be as follows:

```
root
└── src
    └── components or pages
        ├── index.js
        ├── ComponentName.jsx
        └── ComponentName.styled.jsx
```

## Contributing

If you would like to contribute to this project, please follow the standard GitHub procedures for creating pull requests and submitting issues. We welcome all feedback and contributions.

## License

This project is licensed under the ISC License - see the [LICENSE](https://opensource.org/license/isc-license-txt/) site for details.

## Acknowledgments

Special thanks to the React community for their support and inspiration.
