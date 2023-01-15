import { gql } from '@apollo/client/core/core.cjs';
import { GH_USER_NAME } from '$env/static/private';
import { executeQuery } from './utils/github';

const QUERY = gql`
query {
    user(login: "${GH_USER_NAME}") {
      projectV2(number: 2) {
        items(first: 10) {
          nodes {
            fieldValueByName(name: "Status") {
              ... on ProjectV2ItemFieldSingleSelectValue {
                name
              }
            }
            content {
              ... on Issue {
                id
                title
                body
                labels (first: 5) {
                  nodes {
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const load = async () => {
	const result = await executeQuery(QUERY);
	const issues = [];
	for (const issue of result.data.user.projectV2.items.nodes) {
		const status = issue.fieldValueByName.name;
		if (status == '作成完了') {
			issues.push({
				status: issue.fieldValueByName.name,
				id: issue.content.id,
				title: issue.content.title,
				body: issue.content.body,
				labels: issue.content.labels.nodes
			});
		}
	}
	return { issues: issues };
};
