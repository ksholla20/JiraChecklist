import api from "@forge/api";

export const getIssueDetails = async(issueId) => {
  const response = await api.asApp().requestJira(`/rest/api/2/issue/${issueId}?fields=status,summary);
  const data = await response.json();
  return {
    'key': data.key,
    'status': data.fields.status.name,
    'summary': data.fields.summary,
    'link': `https://${data.self.split("/")[2]}/browse/${data.key}`
  }; 
};
