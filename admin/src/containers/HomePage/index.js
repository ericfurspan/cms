import React, { memo } from 'react';

import { Block, Container, LinkWrapper, Separator } from './components';

const HomePage = ({ global: { plugins }, history: { push } }) => {
  return (
    <>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-12">
            <Block>&lt; Work in Progress &gt;</Block>
          </div>
        </div>

        <Separator style={{ marginTop: 37, marginBottom: 36 }} />

        <div className="row">
          <div className="col-12">
            <Block>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <LinkWrapper
                  href='/documentation'
                  target="_blank"
                  type='doc'
                >
                  <p className="bold">Read the documentation</p>
                  <p>Explore the API through the interactive Swagger docs.</p>
                </LinkWrapper>
              </div>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);