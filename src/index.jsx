import ForgeUI, { render, useConfig, ConfigForm, TextField, Fragment, Macro, Table, Head, Cell, Text, Row } from "@forge/ui";
import { useContentProperty } from "@forge/ui-confluence";
import {getIssueDetails} from "./utils";

interface EntryData {
  key: string;
  status: string;
  link: string;
  summary: string;
}

const Config = () => {
  return (
    <ConfigForm>
      <TextField
        label="Space Separated list of Jira issue number"
        name="issueList"
      />
    </ConfigForm>
  );
}
const App = () => {
  const {issueList} = useConfig();
  const issues = issueList.split(" ").map((val)=>data[val]);
  const [issues, updateIssues] = useContentProperty<EntryData[]>(
    "issues",
    []
  );
  
  issueList.split(" ").map(function(val) {
    getIssueDetails(val)
      .then(function(data){
        updateIssues(prev => {
          return [...prev, data];
        });
      })
      .catch(function(err){
        console.log(`failed for ${val}`);
      })
  });

  return (
    <Fragment>
      <Table>
        <Head>
          <Cell>
            <Text content="Issue Key" />
          </Cell>
          <Cell>
            <Text content="Summary" />
          </Cell>
	  <Cell>
            <Text content="State" />
	  </Cell>
        </Head>
        {issues && issues.map(issue => (
                <Row>
                  <Cell>
                    <Text>
                      [{issue.key}]({issue.link})
                    </Text>
                  </Cell>
                  <Cell>
                    <Text content={issue.summary} />
                  </Cell>
                  <Cell>
                    <Text content={issue.status} />
                  </Cell>
                </Row>
              ))}
      </Table>
    </Fragment>
  );
};

export const run = render(
  <Macro
    app={<App />}
    config={<Config />}
    defaultConfig={{
      issueList: "FH-2 FH-3 FH-4"
    }}
  />
);
