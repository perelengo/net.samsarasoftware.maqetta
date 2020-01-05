
package net.samsarasoftware.maqetta.plugin;

/*-
 * #%L
 * org.eclipse.acceleo.module.samsarasoftware.services
 * %%
 * Copyright (C) 2014 - 2017 Pere Joseph Rodriguez
 * %%
 * This software is property of Pere Joseph Rodriguez (Spain) and is distributed under licensing.
You must not have acces to this file unless with its propietary permission.
You may obtain a copy of the License at

	http://www.samsara-software.es/licenses/license.txt
	
See the License for the specific language governing permissions and
limitations under the License.
 * #L%
 */
import org.eclipse.core.runtime.Plugin;
import org.osgi.framework.BundleContext;

/**
 * The activator class controls the plug-in life cycle.
 */
public class Activator extends Plugin {

    /**
     * The plug-in ID.
     */
    public static final String PLUGIN_ID = "net.samsarasoftware.maqetta.plugin";

    /**
     * The shared instance.
     */
    private static Activator plugin;
    
    /**
     * The constructor.
     */
    public Activator() {
    }

    /**
     * {@inheritDoc}
     *
     * @see org.eclipse.core.runtime.Plugin#start(org.osgi.framework.BundleContext)
     */
    public void start(BundleContext context) throws Exception {
        super.start(context);
        plugin = this;
    }

    /**
     * {@inheritDoc}
     *
     * @see org.eclipse.core.runtime.Plugin#stop(org.osgi.framework.BundleContext)
     */
    public void stop(BundleContext context) throws Exception {
        plugin = null;
        super.stop(context);
    }

    /**
     * Returns the shared instance.
     *
     * @return the shared instance
     */
    public static Activator getDefault() {
        return plugin;
    }

}
