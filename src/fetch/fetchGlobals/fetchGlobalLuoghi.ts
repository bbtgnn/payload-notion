import { getPayloadHMR } from '@payloadcms/next/utilities';
import config from '@payload-config';
import { Payload } from 'payload';
import { Globals } from '../../globals/index'

export const fetchGlobalLuoghi = async () => {
  const payload: Payload = await getPayloadHMR({ config });

  const result = await payload.findGlobal({
    slug: Globals.Pagina_luoghi,
  });

  return result;
};
