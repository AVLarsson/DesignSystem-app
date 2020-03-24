import * as React from 'react';

import {Grid, FlexCol} from 'pivotal-ui/react/flex-grids';
import {Siteframe} from 'pivotal-ui/react/siteframe';
import {Panel} from 'pivotal-ui/react/panels';


class ProdPage extends React.Component {
    render() {
        return (
            <>
                <Siteframe/>
                <Panel>
                    <Grid>
                    <h1>HEJ</h1>
                    </Grid>
                </Panel>
            </>
        );
    }
};

export default ProdPage;