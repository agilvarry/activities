import { observer } from "mobx-react-lite";
import React from "react";
import { Segment } from "semantic-ui-react";
import Container from "semantic-ui-react/dist/commonjs/elements/Container/Container";
import Header from "semantic-ui-react/dist/commonjs/elements/Header";
import { useStore } from "../../app/stores/store";

export default observer(function ServerError() {
    const { commonStore } = useStore();
    return (
        <Container>
            <Header as='h1' content='Server Error' />
            <Header sub as='h5' color='red' content={commonStore.error?.message} />
            {commonStore.error?.details &&
                <Segment>
                    <Header as='h4' content='Stack trace' color='teal' />
                    <code style={{ marginTop: '10px' }}>{commonStore.error.details}</code>
                </Segment>
                }
        </Container>
    )
});