import { UserState } from '../user/state/user.reducer';

export interface State {
    user: UserState;
}

// Product state is lazy loaded.
