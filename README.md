# react-component-creator

This project is a command-line tool that helps simplify the process of creating components and pages for React applications. The primary goal of the project is to reduce the amount of time and effort required to create components and pages, enabling developers to focus on other important tasks.

## Usage

To use this script, create an empty JS file in the root of your project and copy the code from this repository. Customize the script to fit your preferences as needed. Then, run the command:

```
node filename.js action-flag component1 component2 ... componentN
```

Replace `filename.js` with the name of the file you created, "action-flag" with the appropriate flag for the action you want to perform.

### Available Flags

- `--component` or `-c` to create a component
- `--page` or `-p` to create a page

### Naming Conventions

Component names can be passed in PascalCase, camelCase, or kebab-case notation. The script will automatically convert them to PascalCase.

### Configuration

To change the file structure that is generated, modify the `CONFIGURATION` object at the top of the script. By default, the structure is designed for projects that use styled-components, but it can be modified to work with CSS modules as well. If you don't want to create an `index.js` file, simply remove the `reexport` property from the `CONFIGURATION` object.

## Example

To create a component named `MyComponent`, run the following command:

```
node index -c MyComponent
```

The structure of the created files and folders will be as follows:

```
root
└── src
    └── components
        └── MyComponent
            ├── index.js
            ├── MyComponent.jsx
            └── MyComponent.styled.jsx
```
The same works with pages. A `pages` folder is created instead of the `components` folder.

## Contributing

If you would like to contribute to this project, please follow the standard GitHub procedures for creating pull requests and submitting issues. We welcome all feedback and contributions.

## License

This project is licensed under the ISC License - see the [LICENSE](https://opensource.org/license/isc-license-txt/) site for details.

## Acknowledgments

Special thanks to the React community for their support and inspiration.
