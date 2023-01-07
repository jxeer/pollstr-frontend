import Chartkick from 'chartkick';
import 'chartkick/chart.js';


const backend_url = 'http://localhost:3000';
	interface Vote {
		id: number;
		name: string;
		answer: string;
		poll_id: number;
		created_at: string;
		updated_at: string;
	}

	interface Poll {
		id: number;
		description: string;
		created_at: string;
		updated_at: string;
		url: string;
		votes: Vote[];
	}


  let polls: Poll[] = [];
	let charts = new Map<number, Map<string, number>>();
	$: {
		for (const [id, answers] of charts) {
			new Chartkick.PieChart(`chart-${id}`, [...[...answers]]);
		}
	}

  onMount(async function () {
		const response = await fetch(`${backend_url}/polls.json`);
		const poll_list: Poll[] = await response.json();
		const outcomes = await Promise.allSettled(
			poll_list.map(({ id }) => fetch(`${backend_url}/polls/${id}.json`))
		);
		// validation *could* go here
		for (const outcome of outcomes) {
			if (outcome.status === 'fulfilled') {
				const response = outcome.value;
				polls.push(await response.json());
			}
			polls = polls;
		}
	});

  function tallyVotes(poll: Poll) {
		// validation *could* go here
		const answers = new Map<string, number>();
		for (const vote of poll.votes) {
			answers.set(vote.answer, (answers.get(vote.answer) ?? 0) + 1);
		}
		charts.set(poll.id, answers);
		charts = charts;
		return answers;
	}

/*

User clicks buttonOne
event listner invokes a function
function sends fetch request to Ruby Server

Ruby server received fetch request
responds to request by

JS receives response and renders onto HTML

*/
