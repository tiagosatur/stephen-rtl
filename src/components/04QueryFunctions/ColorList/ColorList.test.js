
import { render, screen } from '@testing-library/react';
import { ColorList } from './ColorList'

const setup = () => render(<ColorList />);

describe('getBy, queryBy, findBy behavior finding or not elements',  () => {

  it('getBy, queryBy, findBy finding 0 elements', async () => {
    setup();

    // getBy instantly throw an error when doesn't find a text input
    expect(() => screen.getByRole('textbox')).toThrow();

    // queryBy will return null if doens't find it
    expect(screen.queryByRole('textbox')).toEqual(null);

    // findBy is async, if doesn't find the element on a span of 1 second, it throws an error
    let errorThrown = false;

    try {
      await screen.findByRole('textbox')

    } catch(err) {
      errorThrown = true;
    }
    expect(errorThrown).toEqual(true)
  });

  it('getBy, queryBy, findBy finding 1 element', async () => {
    setup();
    const getList = screen.getByRole('list');
    const queryList = screen.queryByRole('list');
    const findList = await screen.findByRole('list');

    expect(getList).toBeInTheDocument();

    expect(queryList).toBeInTheDocument();

    expect(findList).toBeInTheDocument();
  });

  it('getBy, queryBy, findBy finding > 1 elements', async () => {
    setup();

    // we only define getListItem as a function if we want to be able to test 
    // that function throws and error when it gets called
    const getListItem = () => screen.getByRole('listitem');
    const queryListItem = () => screen.queryByRole('listitem');


    expect(getListItem).toThrow();

    expect(queryListItem).toThrow();

    let errorThrown = false;

    try {
      await screen.findByRole('listitem');
    } catch(err) {
      errorThrown = true;
    }
    expect(errorThrown).toEqual(true);

  });

  it('getAllBy, queryAllby, findAllBy', async () => {
    setup();
    expect(
      screen.getAllByRole('listitem')
    ).toHaveLength(3);

    expect(
      screen.queryAllByRole('listitem')
    ).toHaveLength(3);

    expect(
      await screen.findAllByRole('listitem')
    ).toHaveLength(3)
  })

  it('favor using getBy to prove an element exists', () => {
    setup();

    // By default getBy throw and error if it doesn't find the element
    
    const element = screen.getByRole('list');
  
    // But you need the full statement toBeInTheDocument
    // to make it clear that it serves this purpose
    // and another engineer doesn't change it for a queryBy for example
    // Which would not throw and error if it doesn't find the element in this case.
    expect(element).toBeInTheDocument();
  })

  it('favor using queryBy when proving an element doesn NOT exist', () => {
    setup();

    // It will not throw right now, it will return null
    const element = screen.queryByRole('textbox');

    // It will get to the expect statement to prove that textbox doesn't exist
    // just list nad listitem exist, so, it is what we want.
    // If we used getBy, it would throw before get in here...
    expect(element).not.toBeInTheDocument();
  })

  // findBy and findAllBy will be used when we do data fetching,
  // we will write down in LoadableColorList component
});
