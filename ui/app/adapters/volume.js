import WatchableNamespaceIDs from './watchable-namespace-ids';

export default class VolumeAdapter extends WatchableNamespaceIDs {
  queryParamsToAttrs = Object.freeze({
    type: 'type',
    plugin_id: 'plugin.id',
  });
}
