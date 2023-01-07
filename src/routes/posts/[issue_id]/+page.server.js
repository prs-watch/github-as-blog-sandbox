import { gql } from '@apollo/client/core/core.cjs';
import { executeQuery } from '../../utils/github';

export const load = async ({ params }) => {
	const q = gql`
    query { 
        node(id:"${params.issue_id}") {
          ... on Issue {
            title
            body
          }
        }
      }
    `;
	const result = await executeQuery(q);
	return {
		title: result.data.node.title,
		body: result.data.node.body
	};
};
