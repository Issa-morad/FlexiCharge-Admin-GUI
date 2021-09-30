import { createContainer, asClass, Lifetime, InjectionMode } from 'awilix';
//
import AuthenticationProvider from './remote-access/remote/AuthenticationProvider';
import ChargerStationCollection from './remote-access/mock/ChargerStationCollection';
import ManageUserCollection from './remote-access/mock/ManageUserCollection';
import ChargerCollection from './remote-access/remote/ChargerCollection';
//

const container = createContainer({
  injectionMode: InjectionMode.CLASSIC
});

container.register({
  authenticationProvider: asClass(AuthenticationProvider, { lifetime: Lifetime.SINGLETON }),
  chargerStationCollection: asClass(ChargerStationCollection, { lifetime: Lifetime.SINGLETON }),
  manageUserCollection: asClass(ManageUserCollection, { lifetime: Lifetime.SINGLETON }),
  chargerCollection: asClass(ChargerCollection, { lifetime: Lifetime.SINGLETON })
});

export default container;