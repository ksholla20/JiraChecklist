# Forge Jira Checklist Confluence Macro

This project contains a Forge app written in Javascript that displays `Hello World!` in a Confluence macro. 

While defining and documenting a project, we might want a checklist of Jira Items, the completion of which defines the project status. The Macro is for this purpose. While adding the macro, we need to add space separated list of issue id which will be tracked in the macro

Following is the screen shot of how the macro looks when published

![][docs/macro.png]

## Quick start

- Build and deploy this app by running:
```
forge deploy
```

- Install your app in an Atlassian site by running:
```
forge install
```

- Develop your app by running `forge tunnel` to proxy invocations locally:
```
forge tunnel
```

### Notes
- Use the `forge deploy` command when you want to persist code changes.
- Use the `forge install` command when you want to install the app on a new site.
- Once the app is installed on a site, the site picks up the new app changes you deploy without needing to rerun the install command.

## Support

See [Get help](https://developer.atlassian.com/platform/forge/get-help/) for how to get help and provide feedback.
