import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import GroupService from '../services/group.service';
import Spinner from '../components/Spinner';
import paths from '../utils/paths';

function StartTest() {
    const { group_id } = useParams();
    const [message, setMessage] = useState();
    const history = useHistory();

    useEffect(() => {
        GroupService.getPublicInfo(group_id)
            .then(res => {
                GroupService.setGroupId(group_id);
                console.log(res.data);
                history.push({
                    pathname: paths.test_form,
                    state: {
                        requestInstitutionalInfo: res.data.requestInstitutionalInfo
                    }
                })
            })
            .catch(err => setMessage(err.response.data.message))
    })

    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>
            {
                message ? <h4 style={{ width: '100%', color: 'red', textIndent: '1em' }}>{message}</h4> : <Spinner size="2" />
            }
        </div>
    )
}
export default StartTest;